/* eslint-disable no-undef */
import axios from "axios";
import { fromByteArray } from "base64-js";

import {
  fluentButton,
  fluentTab,
  fluentTabPanel,
  fluentTabs,
  provideFluentDesignSystem,
  fluentTextField,
  fluentProgressRing,
} from "@fluentui/web-components";

let ringElement: HTMLElement;
let range: Excel.Range = null;
let hstring: string = "";
let codart: string = "";
let webapiurl: string = "";

Office.onReady((info) => {
  if (info.host === Office.HostType.Excel) {
    //document.getElementById("sideload-msg").style.display = "false";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("run").style.display = "flex";
    document.getElementById("run").onclick = run;
    document.getElementById("send").onclick = Send;
    document.getElementById("codartinput").onchange = InputChange;
    //document.getElementById("apiurlinput").onchange = InputApiChange;
    //document.getElementById("saveurl").onclick = SaveSettings;
    // webapiurl = Office.context.document.settings.get("apiUrl");
    webapiurl = "https://form.cometa.it:8088/api/schedahtml";

    document.getElementById("webapiurlinfo").innerText = webapiurl;

    provideFluentDesignSystem().register(
      fluentButton(),
      fluentTab(),
      fluentTabPanel(),
      fluentTabs(),
      fluentTextField(),
      fluentProgressRing()
    );
    ringElement = document.getElementById("ring");
  }
});

export function InputChange(ev: any) {
  codart = ev.target.value;
}

export function InputApiChange(ev: any) {
  webapiurl = ev.target.value;
}

export async function SaveSettings(ev: any) {
  Office.context.document.settings.set("apiUrl", webapiurl);
  await Office.context.document.settings.saveAsync();
}

export async function run() {
  try {
    await Excel.run(async (context) => {
      let sheet = context.workbook.worksheets.getFirst();
      range = sheet.getUsedRange();
      range.load("address");
      range.load("text");
      range.load("values");

      await context.sync();

      //console.log(`The range address was ${range.address} -- ${range.values}  `);
      ringElement.style.display = "flex";
      await runtable();
      ringElement.style.display = "none";
      // eslint-disable-next-line no-undef
      hstring = document.getElementById("tableroot").innerHTML;
      // eslint-disable-next-line no-undef
      document.getElementById("datiinput").style.display = "flex";
      document.getElementById("run").style.display = "none";
    });
  } catch (error) {
    console.error(error);
  }
}

export async function Send() {
  // eslint-disable-next-line no-undef
  codart = (<HTMLInputElement>document.getElementById("codartinput")).value;
  if (codart) {
    ringElement.style.display = "flex";
    console.log(hstring);
    const bytes = new TextEncoder().encode(hstring);
    const base64String = fromByteArray(bytes);
    const d = new Date();
    let datastringa = d.toJSON();
    const schedajson = {
      articoloCometa: codart,
      nomeProdotto: "",
      idModello: "7166",
      online: false,
      haDataSheet: true,
      bloccato: false,
      dataCompilazione: datastringa,
      ultimaModifica: datastringa,
      note: base64String,
      forzaUpdate: false,
      idProvider: 0,
      noteRevisione: "SCHEDA DA EXCEL",
      ultimaRevisione: datastringa,
    };
    axios
      .post("https://form.cometa.it:8088/api/schedahtml", schedajson)
      .then(async (response) => {
        if (response.status == 200) {
          await SetMessage("Inserimento/aggiornamento datasheet ok", "green");
          codart = "";
          document.getElementById("codartinput").textContent = "";
          ringElement.style.display = "none";
        }
        console.log(response.data);
      })
      .catch(async (error) => {
        await SetMessage("Inserimento/aggiornamento su datasheet non riuscito", "red");
        console.error(error);
        ringElement.style.display = "none";
      });
  } else {
    await SetMessage("Codice articolo vuoto. Invio su datasheet non effettuato", "red");
    ringElement.style.display = "none";
  }
}

export async function SetMessage(messaggio: string, colore: string) {
  const msgroot = document.getElementById("messagediv");
  while (msgroot.firstChild) {
    msgroot.removeChild(msgroot.lastChild);
  }
  const nsg = document.createElement("h5");
  nsg.style.backgroundColor = colore;
  nsg.style.padding = "8px";
  nsg.style.color = "white";
  nsg.innerText = messaggio;
  msgroot.appendChild(nsg);
}

export async function runtable() {
  try {
    const container = document.createElement("div");
    container.classList.add("data-sheet-container");
    const table = document.createElement("table");
    table.classList.add("table");
    table.classList.add("table-sm");
    table.classList.add("mb-0");
    /*
    const headerrow = document.createElement("tr");
    const caratteristicanameheader = document.createElement("th");
    caratteristicanameheader.classList.add("text-dark");
    caratteristicanameheader.classList.add("font-weight-bold");
    caratteristicanameheader.classList.add("text-uppercase");
    caratteristicanameheader.classList.add("grey");
    caratteristicanameheader.classList.add("lighten-3");
    caratteristicanameheader.classList.add("py-1");
    caratteristicanameheader.innerText = "Caratteristiche";
    headerrow.appendChild(caratteristicanameheader);
    const caratteristicavalueheader = document.createElement("th");
    caratteristicavalueheader.classList.add("text-primary");
    caratteristicavalueheader.classList.add("font-weight-bold");
    caratteristicavalueheader.classList.add("text-uppercase");
    caratteristicavalueheader.classList.add("grey");
    caratteristicavalueheader.classList.add("lighten-3");
    caratteristicavalueheader.classList.add("py-1");
    caratteristicavalueheader.innerText = "";
    headerrow.appendChild(caratteristicavalueheader);
    table.appendChild(headerrow);
    */
    const root = document.getElementById("tableroot");
    root.appendChild(container).appendChild(table);

    for (const dataitem of range.values) {
      if (dataitem[0]) {
        // eslint-disable-next-line no-undef
        const datarow = document.createElement("tr");
        if (!dataitem[1]) {
          const caratteristicanameheader = document.createElement("th");
          caratteristicanameheader.setAttribute("colspan", "2");
          caratteristicanameheader.classList.add("text-dark");
          caratteristicanameheader.classList.add("font-weight-bold");
          caratteristicanameheader.classList.add("text-uppercase");
          caratteristicanameheader.classList.add("grey");
          caratteristicanameheader.classList.add("lighten-3");
          caratteristicanameheader.classList.add("py-1");
          caratteristicanameheader.innerText = dataitem[0];
          datarow.appendChild(caratteristicanameheader);
          table.appendChild(datarow);
        } else {
          const caratteristicacell = document.createElement("td");
          caratteristicacell.classList.add("font-weight-bold");
          caratteristicacell.innerText = dataitem[0];
          datarow.appendChild(caratteristicacell);
          const caratteristicaValcell = document.createElement("td");
          caratteristicaValcell.classList.add("font-weight-normal");
          caratteristicaValcell.innerText = dataitem[1];
          datarow.appendChild(caratteristicaValcell);
          table.appendChild(datarow);
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
}
