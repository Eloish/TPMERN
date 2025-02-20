const CategoryForm=()=>{    
    return(
        <>
      <Entet title="Add Products"/>
      <div className="container-fluid">
            
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12">
                   
                    <div className="card">
                        <div className="body">
                            <h2 className="card-inside-title">Add Category Form</h2>
                            <form action="">
                            
                                <div className="col-sm-6">
                                        <div className="form-group pb-2">                                    
                                            <input type="text" className="form-control" {...register('name')} placeholder="Category_Name" />
                                        </div>
                                </div>   
                                <div className="col-sm-12">
                                        <div className="form-group pb-2">
                                            <div className="form-line">
                                                <textarea rows="4" className="form-control no-resize" placeholder="Description"></textarea>
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

    )
}