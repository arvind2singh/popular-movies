import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
export default function Dashboard(props) {
    const dispatch = useDispatch();
    const {favList, list} = useSelector((state)=>state);
    console.log("list>>",list);
    console.log("favlist>>",favList);
    useEffect(() => {
        dispatch({type:'GET_MOVIE'});
    }, [])
    return (
        <div>
            <Header {...props}/>
            <Sidebar />
            <div class="content-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="page-title">Popular Movies</h2>
                        </div>
                    </div>
                </div>
            
                <div class="tabs-section">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card tab-container">
                                    <div class="card-body borderd-tabs">
                                        <ul class="nav nav-pills m-t-30 m-b-30">
                                            <li class="nav-item"><a href="#movie_list" class="nav-link active" data-toggle="tab" aria-expanded="false">Movie List</a>
                                            </li>
                                            <li class="nav-item"><a href="#fav_movie" class="nav-link" data-toggle="tab" aria-expanded="false">Favourite Movie</a>
                                            </li>
                                            </ul>
                                        <div class="tab-content br-n pn">
                                            <div id="movie_list" class="tab-pane active">
                                                <div class="row">
                                                    <div class="col-md-12">
                        <div class="accordion table-data">
                            <div class="card rounded-0">
                                <div id="table-two" class="collapse show table-responsive">
                                    <table class="table m-b-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID Number</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Release Date</th>
                                                <th>More</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {list.map((item) => {
                                                return (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.release_date}</td>
                                                <td><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target={"#modal_"+item.id}>Details</button></td>
                                                <div class="modal fade" id={"modal_"+item.id}>
    <div class="modal-dialog modal-xl">
    
          <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"></h4>
        </div>
        <div class="modal-body">
        <img src={"https://image.tmdb.org/t/p/w500/"+item.poster_path} class="img-thumbnail" alt="" width="470" height="200" ></img>
        <h2>{item.title}</h2>
          <h5>{item.release_date}</h5>
          <p>{item.overview}</p>
        </div>
        <div class="modal-footer">
            <a href="https://content.jwplatform.com/manifests/yp34SRmf.m3u8">
        <button type="button" class="btn button btn-outline-danger btn-circular btn-outline">Preview</button></a>
          
          <button type="button" class="btn button btn-outline-hover btn-circular btn-outline">Favourite</button>
        </div>
      </div>
      
    </div>
  </div>
                                            </tr>
                                                )
                                            })}
                                            
                                           </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fav_movie" class="tab-pane">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p>
                                                         hello sir!
                                                         Sorry i could not find the session id (required) for add to favourite Api .
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}
