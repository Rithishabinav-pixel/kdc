export default function Insights({datas}){

    return (

     <>
     
      
     {datas.map((items) => (

       <div className="col-sm-12 col-md-6 col-xl-4" key={items.id}>

        <a href="">

          <div className="blog_crd"  data-aos="fade-up">
 
             <img className="ftr_img" src={items.img} alt={items.title} width="100%"/>

             <div className="blog_cnt">

                <h4>{items.title}</h4>
            
                <p>{items.description}</p>

                <span>Learn more</span> <img className="line_img" src="../../assets/img/blu-arr.svg" alt="Right Arrow" />

             </div>

          </div>

          </a>

       </div>

     ))}
     
     
     </>

     );

} 