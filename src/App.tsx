import React from 'react';
import './App.css';
import BoardItem from './components/BoardItem';
import { latestBoardListMock, top3BoardListMock,commentListMock, favoriteListMock } from './mocks';
import Top3Item from './components/Top3Item';
import CommentItem from './components/CommentItem';
import FavoriteItem from './components/FavoriteItem';


//여기부터는 문법용(삭제필)
import Hello from './components/ZebraTestComponent/Hello';

function App() {
  return (
    <>
      {/* 보드리스트 */}
      { /* {latestBoardListMock.map(boardListItem => <BoardItem boardListItem={boardListItem}/>)} */}
      
      {/* TOp3 리스트 */}
      {/*
      <div style={{ display:'flex',justifyContent:'center',gap:'24px'}}>
        {top3BoardListMock.map(top3ListItem => <Top3Item top3ListItem={top3ListItem} />)} 
      </div>
      */}
      {/* 코멘트리스트 */}
      {/*
      <div style={{ padding: '0 20px',display:'flex', flexDirection:'column',gap:'30px'}}>
        {commentListMock.map(commentListItem => <CommentItem commentListItem={commentListItem} />)} 
      </div> 
       */}
       {/* 좋아요리스트 */}
       {/* 
       <div style={{ display:'flex',columnGap:'30px',rowGap:'20px'}}>
        {favoriteListMock.map(favoriteListItem => <FavoriteItem favoriteListItem={favoriteListItem} />)} 
      </div>
      */}
    </>
  );
}

export default App;
