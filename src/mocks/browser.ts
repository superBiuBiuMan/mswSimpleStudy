import { setupWorker,SetupWorker } from "msw";
import { handlers } from "./handler";

export const worker:SetupWorker = setupWorker(...handlers)
