//Table actions
export const TABLE_BUMP_ITEM = "TABLE_BUMP_ITEM";
export const TABLE_VIEW = "TABLE_VIEW";
export const UPDATE_TABLE_VIEW = "UPDATE_TABLE_VIEW";
//Card actions
export const CARD_BUMP_ITEM = "CARD_BUMP_ITEM";
export const CARD_VIEW = "CARD_VIEW";
export const UPDATE_CARD_VIEW = "UPDATE_CARD_VIEW";
export const ADD_CARD = "ADD_CARD";
//Other constants
export const rowHeader = {
    pid: "ID#",
    id: "ID", 
    docnumber: "Document#", 
    received: "Received", 
    tableno: "Table#", 
    qty: "Qty", 
    name: "Item",
    modifiers:"Modifiers" 
}
//links
export const PREPARATION_UPDATE = "/preparation/update?terminalcode=";
export const PREPARATION_BUMP = "/preparation/update?id=";
export const CHIT_UPDATE = "/chit/update?terminalcode=";
export const CHIT_BUMP = "/chit/bump?docnumber=";