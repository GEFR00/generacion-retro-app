import { API_URL_SPREEDSHEET, SPREEDSHEET_PROGRAMS_ID } from "../constants"

export const getPrograms = async ( spreedSheetName ) => {

    const programsId = SPREEDSHEET_PROGRAMS_ID;
    let URL = API_URL_SPREEDSHEET.replace('[SPREEDSHEET_ID]', programsId);
    URL = URL.replace('[SPREEDSHEET_NAME]', spreedSheetName);

    const response = await fetch(URL);
    const data = await response.json();
    return data;
}