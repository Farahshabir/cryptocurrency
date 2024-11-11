"use client";
import { useState, useEffect } from "react";

export default function CoinMarket() {
  const API_KEY = "http://api.coinlayer.com/live?access_key=bbcd403ac7df426285d9cdd50eaef00b";
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=bbcd403ac7df426285d9cdd50eaef00b`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);

  return (
    <>
    <div className="mainContainer w-[100%] h-[1000px]">
   <div className="ml-96 text-cyan-200 font-serif text-xl">
    <h1 className="text-blue-600; text-4xl flex justify-center mt-5">Crypto Currency Rates</h1>
    <div className="flex justify-center mt-5">
        
    <table className="border-collapse border border-slate-400 ">
        <tr>
            <th className="border border-slate-300 w-[200px]">Coin</th>
            <th className="border border-slate-300 w-[200px]">Rate</th>
        </tr>
        <tr>
            <td className="border border-slate-300 text-center"> BTC: </td>
            <td className="border border-slate-300 text-center">{data?.rates?.BTC}</td>
        </tr>
        <tr>
            <td className="border border-slate-300 text-center"> BNB: </td>
            <td className="border border-slate-300 text-center">{data?.rates?.BNB}</td>
        </tr>
        <tr>
            <td className="border border-slate-300 text-center"> ABC: </td>
            <td className="border border-slate-300 text-center">{data?.rates?.ABC}</td>
        </tr>
        <tr>
            <td className="border border-slate-300 text-center"> ACP: </td>
            <td className="border border-slate-300 text-center">{data?.rates?.ACP}</td>
        </tr>
        <tr>
            <td className="border border-slate-300 text-center"> ACT*: </td>
            <td className="border border-slate-300 text-center">{data?.rates?.ACT}</td>
        </tr>
        <tr>
            <td className="border border-slate-300 text-center"> ADA: </td>
            <td className="border border-slate-300 text-center">{data?.rates?.ADA}</td>
        </tr>
        <tr>
            <td className="border border-slate-300 text-center"> ADCN: </td>
            <td className="border border-slate-300 text-center">{data?.rates?.ADCN}</td>
        </tr>
        <tr>
            <td className="border border-slate-300 text-center"> ADL: </td>
            <td className="border border-slate-300 text-center">{data?.rates?.ADL}</td>
        </tr>
        <tr>
            <td className="border border-slate-300 text-center"> ADX: </td>
            <td className="border border-slate-300 text-center">{data?.rates?.ADX}</td>
        </tr>
        <tr>
            <td className="border border-slate-300 text-center"> ADZ: </td>
            <td className="border border-slate-300 text-center">{data?.rates?.ADZ}</td>
        </tr>
      </table>
      </div>
      </div>
      </div>
    </>
  );
}