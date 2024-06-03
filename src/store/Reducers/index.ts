import { combineReducers } from 'redux'

import accountReducer from './Account'
import customizationSettingsSlice from './CustomizationSettings'
import navigationValues from './NavigationValues'

const rootReducer = combineReducers({
  userData: accountReducer,
  companyCustomizationSettings: customizationSettingsSlice,
  navigationValues: navigationValues
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
