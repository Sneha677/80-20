import Head from 'next/head'
import Link from 'next/link'

function politicsPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
			<h2 class="font-bold text-2xl  text-center text-slate-900 my-10">Political Details</h2>
            <div className="overflow-auto bg-gray-200 p-4 mx-20 h-24 text-justify mb-10 ">
            Uttar Pradesh Chief Minister Yogi Adityanath, who is known for his firebrand speeches on communal 
            issues, has sparked a row with his statement that the elections in the state will be '80 per cent 
            versus 20 per cent', in a veiled reference to the percentage of muslim population in the country.

            He made these comments as Election Commission announced the schedule for the Assembly elections this 
            year, thus enforcing the Model Code of Conduct. Opposition leaders across parties were quick to slam 
            Adityanath's comments, alleging that they were a violation of MCC.
            
            Corruption in India is an issue which affects economy of central, state and local government agencies 
            in many ways. Corruption is blamed for stunting the economy of India.[1] A study conducted by 
            Transparency International in 2005 recorded that more than 62% of Indians had at some point or 
            another paid a bribe to a public official to get a job done.[2][3] In 2008, another report showed 
            that about 50% of Indians had first hand experience of paying bribes or using contacts to get services 
            performed by public offices.[4] In 2021 their Corruption Perceptions Index ranked the country in 85th 
            place out of 180, on a scale where the lowest-ranked countries are perceived to have the most honest 
            public sector.[5] Various factors contribute to corruption, including officials siphoning money from 
            government social welfare schemes . Examples include the Mahatma Gandhi National Rural Employment 
            Guarantee Act and the National Rural Health Mission. Other areas of corruption include India's 
            trucking industry which is forced to pay billions of rupees in bribes annually to numerous regulatory 
            and police stops on interstate highways.
            </div>
            <div className="flex justify-center items-center space-x-4 ">
   
   <Link href="/data1">
   <button class="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-8 border-b-4 border-slate-700 hover:border-slate-500 rounded mx-40 my-10">
  BACK</button></Link>
	</div>
            </div>
    )
}
export default politicsPage