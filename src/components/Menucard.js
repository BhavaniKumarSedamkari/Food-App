import MenuAccordian from "./MenuAccordian";
const Menucard =({card})=>{
    const menucardlist= card.card.card.itemCards;
    return(
        <div className="">
            {menucardlist.map((e,index)=>{
                return <MenuAccordian e={e} key={index}/>
            })}
        </div>
    )
};

export default Menucard;