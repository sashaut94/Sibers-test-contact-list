const labels = ['username', 'name', 'email', 'city', 'state', 'zipcode', 'company', 'phone']

export function fillFormControls() {
  return labels.map((label, index) => ({
    id: index + 1,
    label: label,
    value: '',
    isValid: false,
    touched: false
  }))
}

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min