import Layout from '../components/layout';

export default function Home() {
  const president = {
    name: '트럼프 대통령',
    endDate: '2021-01-20',
    imgSrc: '../images/trump.png',
    width: 300,
  };

  const message = {
    expiration_date_title: '임기 만료까지',
    expiration_date_description: '임기 만료',
    card_title: '미국의 대통령의 임기',
    card_content: [<p>미국에서의 대통령의 임기는 4년 중임제이다.</p>],
    url: 'https://chekly.co/trump',
  };

  return (
    <div>
      <Layout president={president} message={message} />
    </div>
  );
}
