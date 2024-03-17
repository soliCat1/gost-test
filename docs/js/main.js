import { initOptions } from "./init-options.js";
import { initSearch } from "./search-oks.js";
import { initForm } from "./init-form.js";
import {Spinner} from "./loading-spinner.js"

Spinner()
Spinner.hide()
initOptions()
initSearch()
initForm()