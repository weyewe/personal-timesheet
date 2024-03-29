class Api::RolesController < Api::BaseApiController
  
  
  def search
    search_params = params[:query]
    selected_id = params[:selected_id]
    if params[:selected_id].nil?  or params[:selected_id].length == 0 
      selected_id = nil
    end
    
    query = "%#{search_params}%"
    # on PostGre SQL, it is ignoring lower case or upper case 
    
    if  selected_id.nil?  
      @objects = Role.where{  (name =~ query)  
                              }.
                        page(params[:page]).
                        per(params[:limit]).
                        order("id DESC")
                        
                        
     @total =   @objects = Role.where{  (name =~ query)  
                              }.count
                              
    else
      @objects = Role.where{ (id.eq selected_id)  
                              }.
                        page(params[:page]).
                        per(params[:limit]).
                        order("id DESC")
    
      @total = Role.where{ (id.eq selected_id)  
                              }.count
    
    end
    
    
    render :json => { :records => @objects , :total => @total, :success => true }
  end
end
