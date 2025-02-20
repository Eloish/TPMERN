import { useForm } from "react-hook-form";
import { useState } from "react";
import AdminApi from '../../../services/AdminApi';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import Entet from "../sidebar/breadcumb";

const schema = yup
  .object({
    name: yup
      .string()
      .required("Le nom est obligatoire") ,
    price:yup.integer().required('prix est obligatoire'),
    stock:yup.integer().required('obligatoire'),
        
  })
  .required();

const AddProductForm = () => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  

const categories=[{
    id:1,
    nom:"vetements"
},
{
    id:2,
    nom:"chaussures"

},
]
const [file, setFile] = useState();
const showimage=(e)=>{
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));

}


  return (
    <>
      <Entet title="Add Products"/>
      <div className="container-fluid">
            
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12">
                   
                    <div className="card">
                        <div className="body">
                            <h2 className="card-inside-title">Add Products Form</h2>
                            <form action="onSubmit={handleSubmit(onSubmit)}">
                            <div className="row clearfix">
                                <div className="col-sm-6">
                                    <input type="file" className="form-control" onChange={showimage}/>

                                </div>
                                <div className="col-sm-6 mb-4">
                                    <img src={file} alt=""  width="60" height="60" {...register("category_id")} />
                                </div>
                            </div> 
                            <div className="row clearfix ">
                            
                                <div class="col-sm-6">
                                <select class="form-control show-tick" {...register("category_id")}>
                                    {
                                        categories.map((category)=>(
                                            <option key={category.id} value='${category.id}'>{category.nom}</option>
                                        ))
                                    }
                                </select>
                                </div>
                            <div className="col-sm-6">
                                    <div className="form-group pb-2">                                    
                                        <input type="text" className="form-control" {...register('name')} placeholder="Product_Name" />
                                    </div>
                            </div>   
                            <div className="col-sm-12">
                                    <div className="form-group pb-2">
                                        <div className="form-line">
                                            <textarea rows="4" className="form-control no-resize" placeholder="Description"></textarea>
                                        </div>
                                    </div>
                            </div>
                            </div>
                            <div className="row clearfix pb-2 ">
                            <div className="col-sm-6">
                                <div className="form-group">                                   
                                    <input type="text" className="form-control" {...register("price")} placeholder="Price" />                                    
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">                                   
                                    <input type="number" className="form-control" {...register("stock") }placeholder="Quantite" />                                    
                                </div>
                            </div>
                        </div>  
                        <div>
                            <button type="submit">Ajouter</button>
                        </div>
                            </form>
                           
                        </div>
                    </div>
                </div>
            </div> 
      </div>

    </>
  );
};

export default AddProductForm ;