import Menucard from "./Menucard";
const MenuList =({e,openMenuList,setmenuindex,index})=>{
    // const [openMenuList,setopenMenuList]=useState(false);
    function eventHandle(){
        setmenuindex(index);
      };
return(
    <div className="w-6/12 my-2">
<div>
    <p className="bg-gray-200 w-12/12 h-4 my-1"></p>
</div>
<div className="flex justify-between" onClick={eventHandle} >
    <h2 className="font-bold">{e.card.card.title} ({e.card.card.itemCards.length})</h2>
    <h2>🔽</h2>
</div>
{openMenuList===true?<div><Menucard card={e}/></div>:null}
</div>
)
};

export default MenuList;
