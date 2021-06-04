import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { rankScore } from './js/sentimentScore'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/fonts.scss'

console.log(checkForName);

export {
 checkForName,
 handleSubmit,
 rankScore,
}
