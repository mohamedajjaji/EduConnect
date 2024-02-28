import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import TeacherSidebar from './TeacherSidebar';

function UserList() {
    useEffect(()=>{
        document.title='User';
    });
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">User List</h5>
                        <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Enrolled Course</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td><Link to="/">Python Development</Link></td>
                                    <td><button className="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </section>
            </div>
        </div>
    );
  }
  
  export default UserList;