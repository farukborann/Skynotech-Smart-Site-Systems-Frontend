import { createSlice } from '@reduxjs/toolkit'

export interface INavigationValues {
  lastMenuId: string
}

const initalNavigationValues: INavigationValues = {
  lastMenuId: '1'
}

const loadFromLocalStorage = (): INavigationValues => {
  const jsonValue = localStorage.getItem('navigationValues')

  return jsonValue ? JSON.parse(jsonValue) : initalNavigationValues
}

const navigationValuesSlice = createSlice({
  name: 'navigationValues',
  initialState: loadFromLocalStorage(),
  reducers: {
    setLastMenuId: (state, { payload }) => {
      const _ = { ...state, lastMenuId: payload }
      localStorage.setItem('navigationValues', JSON.stringify(_))
      return _
    }
  }
})

export const { setLastMenuId } = navigationValuesSlice.actions

export default navigationValuesSlice.reducer
