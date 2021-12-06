import type { NextPage } from 'next';
import { useState } from 'react';
import axios from 'axios';

const Home: NextPage = () => {
  const [resData, setResData] = useState<string>('');

  //ネスト初回リクエスト
  const nestRequest = async () => {
    const res: any = await axios
      .get('../api/nestRequest')
      .then((response) => response.data.nestResponse)
      .catch((error) => {
        console.log(error.response);
        return error.response.data.serverErrMsg;
      });
    setResData(res);
  };

  //Prismaユーザー作成
  const prismaCreateUser = async () => {
    const res: any = await axios
      .post('../api/user', { name: '山田太郎', email: 'sample@gamil.com' })
      .then((response) => response.data);
    setResData(res.name);
  };

  //Prismaポスト作成
  const prismaCreatePost = async () => {
    const res: any = await axios
      .post('../api/post', {
        title: '今日の感想',
        content: '晩御飯美味しかった',
        authorEmail: 'sample@gamil.com',
      })
      .then((response) => response.data);
    setResData(res.title);
  };

  //Prismaポスト取得
  const prismaSelectPost = async () => {
    const res: any = await axios.get('../api/test/1').then((response) => response.data);
    setResData(res.title);
  };

  //CSSは適当です...
  return (
    <body className='w-full min-h-screen'>
      <div
        onClick={nestRequest}
        className='w-48 h-8 bg-purple-700 hover:bg-purple-800 text-white rounded-3xl text-center px-2 py-1 mx-auto mt-32 mb-8'
      >
        Nest初回リクエスト
      </div>
      <div
        onClick={prismaCreateUser}
        className='w-48 h-8 bg-purple-700 hover:bg-purple-800 text-white rounded-3xl text-center px-2 py-1 mx-auto mb-8'
      >
        Prismaユーザー作成
      </div>
      <div
        onClick={prismaCreatePost}
        className='w-48 h-8 bg-purple-700 hover:bg-purple-800 text-white rounded-3xl text-center px-2 py-1 mx-auto mb-8'
      >
        Prismaポスト作成
      </div>
      <div
        onClick={prismaSelectPost}
        className='w-48 h-8 bg-purple-700 hover:bg-purple-800 text-white rounded-3xl text-center px-2 py-1 mx-auto mb-8'
      >
        Prismaポスト取得
      </div>
      <p className='text-red-500 text-center'>{resData}</p>
    </body>
  );
};

export default Home;
