import './App.css';
import './stylesheets/basic.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Create } from './components/CRUD/Create';
import { Edit } from './components/CRUD/Edit';
import { List } from './components/CRUD/List';

function App() {
  return (
    <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<List />}></Route>
                    <Route path='/create' element={<Create />}></Route>
                    <Route path='/edit' element={<Edit />}></Route>
                </Routes>
            </BrowserRouter>  
      {/* <Counter count='1' />
      <Counter count='2'>
        <p>This is children</p>
        </Counter> 
        <Counter count='3'>
          <button>Action</button>
        </Counter> 
        
        <Parent />
        <Forms /> */}
        {/* <PostList /> */}
        {/* <Forms /> */}
        {/* <Search /> */}
        {/* <UserList /> */}
        {/* <Counter startAt={8} countBy={2} /> */}
        {/* <CounterClass /> */}
        {/* <List /> */}
        
    </div>
     
  );
}

export default App;
