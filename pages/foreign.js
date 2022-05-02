import Head from 'next/head'
import Link from 'next/link'


function popPage() {
    return (
        <div class="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">   
			<h2 class="font-bold text-2xl  text-center text-slate-900 my-10">Foreign Policy</h2>
            <div className="overflow-auto bg-gray-200 p-4 mx-20 h-24 text-justify mb-10 ">
The idea of long-term management of relationships followed the development of professional diplomatic corps 
that managed diplomacy. Since 1711, the term diplomacy has been taken to mean the art and practice of conducting 
negotiations between representatives of groups or nations.

In the 18th century, due to extreme turbulence in European diplomacy and ongoing conflicts, the practice of 
diplomacy was often fragmented by the necessity to deal with isolated issues, termed "affairs". Therefore, while 
domestic management of such issues was termed civil affairs (peasant riots, treasury shortfalls, and court
 intrigues), the term foreign affairs was applied to the management of temporary issues outside the sovereign 
 realm. This term remained in widespread use in the English-speaking states into the 20th century, and remains the
  name of departments in several states that manage foreign relations. Although originally intended to describe 
  short term management of a specific concern, these departments now manage all day-to-day and long-term 
  international relations among states.

Organisations such as the Council of Foreign Relations in the United States are sometimes employed by government
 foreign relations organisations to develop foreign policy proposals as alternatives to existing policy, or to 
 provide analytical assessments of evolving relationships.
 </div>
 <div className="flex justify-center items-center space-x-4 ">
   
   <Link href="/data1">
   <button class="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-8 border-b-4 border-slate-700 hover:border-slate-500 rounded mx-40 my-10">
  BACK</button></Link>
	</div>
</div>       
        
 )
}
export default popPage