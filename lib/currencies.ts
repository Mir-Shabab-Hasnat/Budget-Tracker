export const Currencies = [
    {value: "USD", label: "$ Dollar", locale: "en-US"},
    {value: "CAD", label: "$ Canadian Dollar", locale: "en-CA"},
    {value: "EUR", label: "€ Euro", locale: "de-DE"},
    {value: "GBP", label: "£ Pound", locale: "en-GB"},
]   

export type Currency = (typeof Currencies)[0]