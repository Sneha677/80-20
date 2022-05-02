import Head from 'next/head'
import Link from 'next/link'


function popPage() {
    return (
        <div class="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">   
			<h2 class="font-bold text-2xl  text-center text-slate-900 my-10">India Population Statewise</h2>       
                    <table className="text-left w-full justify-between overflow-y: auto bg-gray-200 p-4 mx-16 h-24 text-justify ">
		            <thead className="bg-black flex text-white w-150 overflow-y: auto ">
			        <tr className="flex w-full h-500 mb-4 ">
				        <th className="p-4 w-1/4">STATES</th>
				        <th className="p-4 w-1/4">Popultion</th>
			        </tr> 
		            </thead>
                    <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll  w-full">
			        <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Maharashtra</td>
				        <td className="p-4 w-1/4">₹32.24 lakh crore (US$430 billion)</td>
			        </tr>
                    <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Tamil Nadu</td>
				        <td className="p-4 w-1/4">₹22.44 lakh crore (US$297 billion)</td>
				       
			        </tr>
                    <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Uttar Pradesh</td>
				        <td className="p-4 w-1/4">₹17.05 lakh crore (US$240 billion)</td>
				        
			        </tr>
                    <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Gujarat</td>
				        <td className="p-4 w-1/4">₹16.48 lakh crore (US$230 billion)</td>
				        
			        </tr>
                    <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Karnataka</td>
				        <td className="p-4 w-1/4">₹16.29 lakh crore (US$228 billion)</td>
				       
			        </tr>
                    <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">West Bengal</td>
				        <td className="p-4 w-1/4">₹13.54 lakh crore (US$181 billion)</td>
				        
			        </tr>
                    <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Rajasthan</td>
				        <td className="p-4 w-1/4">₹10.21 lakh crore (US$140 billion)</td>
				       
			        </tr>
			        <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Andhra Pradesh</td>
				        <td className="p-4 w-1/4">₹10.19 lakh crore (US$130 billion)</td>
				        
			        </tr>
			        <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Kerala</td>
				        <td className="p-4 w-1/4">₹9.78 lakh crore (US$130 billion)</td>
                        </tr>
				        
			        <tr className="flex w-full mb-4">
				        <td className="p-4 w-1/4">Telangana</td>
				        <td className="p-4 w-1/4">₹9.78 lakh crore (US$130 billion)</td>
				     
			        </tr>
			<tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Madhya Pradesh</td>
				<td className="p-4 w-1/4">₹9.17 lakh crore (US$120 billion)</td>
				
			</tr>
			<tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Delhi</td>
				<td className="p-4 w-1/4">₹8.56 lakh crore (US$110 billion)</td>
				
			</tr>	
          	<tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Haryana</td>
				<td className="p-4 w-1/4">₹7.65 lakh crore (US$100 billion)</td>
			
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Bihar</td>
				<td className="p-4 w-1/4">₹7.57 lakh crore (US$99 billion)</td>
			
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Punjab</td>
				<td className="p-4 w-1/4">	₹5.41 lakh crore (US$71 billion)</td>
				
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Odisha</td>
				<td className="p-4 w-1/4">₹5.09 lakh crore (US$67 billion)</td>
				
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Assam</td>
				<td className="p-4 w-1/4">₹4.09 lakh crore (US$54 billion)</td>
				
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Chhattisgarh</td>
				<td className="p-4 w-1/4">₹3.50 lakh crore (US$46 billion)</td>
			
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Jharkhand</td>
				<td className="p-4 w-1/4">₹3.29 lakh crore (US$43 billion)</td>
				
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Uttarakhand</td>
				<td className="p-4 w-1/4">₹2.53 lakh crore (US$33 billion)</td>
			
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Jammu and Kashmir</td>
				<td className="p-4 w-1/4">₹1.76 lakh crore (US$23 billion)</td>
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Himachal Pradesh</td>
				<td className="p-4 w-1/4">₹1.56 lakh crore (US$20 billion)</td>
			
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Goa</td>
				<td className="p-4 w-1/4">₹0.815 lakh crore (US$11 billion)</td>
				
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Tripura</td>
				<td className="p-4 w-1/4">₹0.597 lakh crore (US$7.8 billion)</td>
				
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Chandigarh</td>
				<td className="p-4 w-1/4">₹0.421 lakh crore (US$5.5 billion)</td>
			
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Puducherry</td>
				<td className="p-4 w-1/4">₹0.380 lakh crore (US$5.0 billion)</td>
				
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Meghalaya</td>
				<td className="p-4 w-1/4">₹0.348 lakh crore (US$4.6 billion)</td>
			
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Sikkim</td>
				<td className="p-4 w-1/4">₹0.325 lakh crore (US$4.3 billion)</td>
				
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Nagaland</td>
				<td className="p-4 w-1/4">₹0.319 lakh crore (US$4.2 billion)</td>
				
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Manipur</td>
				<td className="p-4 w-1/4">₹0.318 lakh crore (US$4.2 billion)</td>
				
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Arunachal Pradesh</td>
				<td className="p-4 w-1/4">₹0.273 lakh crore (US$3.6 billion)</td>
				
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Mizoram</td>
				<td className="p-4 w-1/4">₹0.265 lakh crore (US$3.5 billion)</td>
			
			</tr>
            <tr className="flex w-full mb-4">
				<td className="p-4 w-1/4">Andaman and Nicobar Islands</td>
				<td className="p-4 w-1/4">₹0.088 lakh crore (US$1.2 billion)</td>
				
			</tr>
            </tbody>
	</table>
    <div className="flex justify-center items-center space-x-4 ">
   
   <Link href="/data1">
   <button class="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-8 border-b-4 border-slate-700 hover:border-slate-500 rounded mx-40 my-10">
  BACK</button></Link>
	</div>
				</div>
                
                )
}
export default popPage