import { createSlice } from '@reduxjs/toolkit'

export interface ICustomizationSettings {
  isDarkMode: boolean
  isSiderCollapsed: boolean
  isNavbarFixed: boolean
  customColor: string
}

const initalCustomizationSettings: ICustomizationSettings = {
  isDarkMode: false,
  isSiderCollapsed: false,
  isNavbarFixed: true,
  customColor: '#004292' // default blue
}

const getCustomizationLocalStorage = (): ICustomizationSettings => {
  const jsonValue = localStorage.getItem('customizationSettings')

  return jsonValue ? JSON.parse(jsonValue) : initalCustomizationSettings
}

const customizationSettingsSlice = createSlice({
  name: 'customizationSettings',
  initialState: getCustomizationLocalStorage(),
  reducers: {
    setCustomizationSettings: (state, { payload }) => {
      return { ...state, ...payload }
    },
    resetCustomizationSettings: () => {
      return initalCustomizationSettings
    },
    saveCustomizationSettings: (state) => {
      localStorage.setItem('customizationSettings', JSON.stringify(state))
      return state
    }
  }
})

export const { setCustomizationSettings, resetCustomizationSettings, saveCustomizationSettings } = customizationSettingsSlice.actions

export default customizationSettingsSlice.reducer
