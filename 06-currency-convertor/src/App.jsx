import { useState } from 'react'


import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
 const [amount,setAmount] = useState(0)
 const [from , setFrom] = useState("usd")
 const [to , setTo] = useState("inr")
 const [convertedAmount , setConvertedAmount] = useState (0)


const currencyInfo = useCurrencyInfo(from)

const options=  Object.keys(currencyInfo)

const swap = ()=>{

  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

 const convert = ()=>{
  setConvertedAmount(amount * currencyInfo[to])
 }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://imgs.search.brave.com/u4KtCqPcQOLInQdCTsvkLAeL31x4VakCqx_kyoy0GfQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjIx/MzAwNjQwNy9waG90/by9jcnlwdG9jdXJy/ZW5jeS1pbnZlc3Rt/ZW50LXdpdGgtZGln/aXRhbC1jaGFydC1i/YWNrZ3JvdW5kLndl/YnA_YT0xJmI9MSZz/PTYxMng2MTImdz0w/Jms9MjAmYz1BbnI1/SEVETTIteWtfdmtr/UDhyMk9jOG1acHI1/eVE0ZWZ3VWZDX2Vr/aXZzPQ')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=> setAmount(amount)}
                                selectCurrency={from}
                                onamountChange={(amount)=>setAmount(amount)}
                                
                              
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                               
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
