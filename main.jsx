import React,{useEffect,useState} from "react";
import {createRoot} from "react-dom/client";
import axios from "axios";
import "./style.css";

const API="http://127.0.0.1:8000/api";
function App(){
 const [products,setProducts]=useState([]),[cart,setCart]=useState([]),[search,setSearch]=useState("");
 useEffect(()=>{axios.get(API+"/products/items/").then(r=>setProducts(r.data))},[]);
 const filtered=products.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()));
 const add=p=>setCart(c=>[...c,p]);
 const total=cart.reduce((s,p)=>s+Number(p.price),0);
 return <div>
  <header><h1>ShopSphere</h1><input placeholder="Search products..." value={search} onChange={e=>setSearch(e.target.value)}/><span>🛒 {cart.length}</span></header>
  <section className="hero"><h2>Smart Shopping, Simple Experience</h2><p>Discover quality products at great prices.</p></section>
  <main><h2>Products</h2><div className="grid">{filtered.map(p=><article className="card" key={p.id}>
    <img src={p.image||"https://via.placeholder.com/400x260?text=Product"}/><h3>{p.name}</h3><p>{p.description}</p><b>৳ {p.price}</b><button onClick={()=>add(p)}>Add to Cart</button>
  </article>)}</div></main>
  <aside><h2>Cart</h2>{cart.map((p,i)=><div key={i}>{p.name} — ৳{p.price}</div>)}<hr/><strong>Total: ৳{total.toFixed(2)}</strong></aside>
  <footer>© 2026 ShopSphere E-Commerce System</footer>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
