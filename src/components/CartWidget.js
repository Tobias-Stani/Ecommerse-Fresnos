import ItemListContainer from "./ItemListContainer";

export const CartWidget = ({producto}) => {
  return (
    
    <div className="dropdown dropdown-hover">

        <label tabIndex={0} className="btn btn-ghost normal-case text-xl">

           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        
        </label>

        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <ol>

            <li>
              <ItemListContainer producto={"engobe"} ></ItemListContainer> 
              <ItemListContainer producto={"arcilla"} ></ItemListContainer>  
            </li>

        </ol>
           
        </ul>

    </div>

  )
}

export default CartWidget;

