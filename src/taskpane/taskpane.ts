/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global console, document, Excel, Office */
import axios from "axios";
import { fromByteArray } from "base64-js";

import {
  fluentButton,
  fluentTab,
  fluentTabPanel,
  fluentTabs,
  provideFluentDesignSystem,
  fluentTextField,
  fluentDialog,
} from "@fluentui/web-components";

let dialogElement: HTMLElement;
let range: Excel.Range = null;
let hstring: string = "";
let codart: string = "";

Office.onReady((info) => {
  if (info.host === Office.HostType.Excel) {
    //document.getElementById("sideload-msg").style.display = "false";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("run").onclick = run;
    document.getElementById("dialogOpener").onclick = Opendialog;
    provideFluentDesignSystem().register(
      fluentButton(),
      fluentTab(),
      fluentTabPanel(),
      fluentTabs(),
      fluentTextField(),
      fluentDialog()
    );
    document.getElementById("fastbtn").onclick = Send;

    dialogElement = document.getElementById("defaultDialog") ;
  }
});

export async function run() {
  try {
    await Excel.run(async (context) => {
      /**
       * Insert your Excel code here
       */
      //const range = context.workbook.getSelectedRange();
      //let sheet = context.workbook.worksheets.getItem("Specification");
      let sheet = context.workbook.worksheets.getFirst();
      range = sheet.getUsedRange();
      // Read the range address
      range.load("address");
      // Update the fill color
      // range.format.fill.color = "yellow";
      range.load("text");
      range.load("values");
      await context.sync();
      //console.log(`The range address was ${range.address} -- ${range.values}  `);
      await runtable();
      hstring = document.getElementById("tableroot").innerHTML;
    });
  } catch (error) {
    console.error(error);
  }
}

export function Opendialog() {
  dialogElement.hidden = false;
}

export async function Send() {
  codart = (<HTMLInputElement>document.getElementById("codartinput")).value;
  if (codart) {
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
      noteRevisione: "Inserito da excel",
      ultimaRevisione: datastringa,
    };
    axios
      .post("https://localhost:44372/api/SchedaHtml", schedajson)
      .then(async (response) => {
        if (response.status == 200) {
          await SetMessage("Inserimento/aggiornamento datasheet ok", "green");
          codart = "";
          document.getElementById("codartinput").textContent = "";
        }
        console.log(response.data);
      })
      .catch(async (error) => {
        await SetMessage("Inserimento/aggiornamento su datasheet non riuscito", "red");
        console.error(error);
      });
  } else {
    await SetMessage("Codice articolo vuoto. Invio su datasheet non effettuato", "red");
  }
}

export async function SetMessage(messaggio: string, colore: string) {
  const msgroot = document.getElementById("messagediv");
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
    const headerrow = document.createElement("tr");
    const caratteristicanameheader = document.createElement("th");
    caratteristicanameheader.classList.add("text-primary");
    caratteristicanameheader.classList.add("font-weight-bold");
    caratteristicanameheader.classList.add("text-uppercase");
    caratteristicanameheader.classList.add("grey");
    caratteristicanameheader.classList.add("lighten-3");
    caratteristicanameheader.classList.add("py-1");
    caratteristicanameheader.innerText = "Caratteristica";
    headerrow.appendChild(caratteristicanameheader);
    const caratteristicavalueheader = document.createElement("th");
    caratteristicavalueheader.classList.add("text-primary");
    caratteristicavalueheader.classList.add("font-weight-bold");
    caratteristicavalueheader.classList.add("text-uppercase");
    caratteristicavalueheader.classList.add("grey");
    caratteristicavalueheader.classList.add("lighten-3");
    caratteristicavalueheader.classList.add("py-1");
    caratteristicavalueheader.innerText = "Valore";
    headerrow.appendChild(caratteristicavalueheader);
    table.appendChild(headerrow);
    const root = document.getElementById("tableroot");
    root.appendChild(container).appendChild(table);

    for (const dataitem of range.values) {
      if (dataitem[0]) {
        const datarow = document.createElement("tr");
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

    const ig = document.getElementById("inputgroup");
    ig.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
