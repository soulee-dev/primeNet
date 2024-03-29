import Link from 'next/link';

const Buttons = (props) => {
  const presidents = [
    ['문재인', '/'],
    ['김정은', '/kim-jung-eun'],
    ['트럼프', '/trump'],
    ['박근혜', '/park-geun-hae'],
    ['이명박', '/lee-myung-bak'],
    ['바이든', '/biden'],
  ];
  let buttonList = [];

  for (let i = 0; i < presidents.length; i++) {
    buttonList.push(
      <Link href={presidents[i][1]} key={i}>
        <button className="button is-primary is-outlined">
          {presidents[i][0]}
        </button>
      </Link>
    );

    console.log(buttonList);
  }
  return <div>{buttonList}</div>;
};

export default Buttons;
