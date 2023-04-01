import UserCardList from 'components/UserCardList/UserCardList';

export const App = () => {
  return (
    <div
      style={{
        // width: '100%',
        // height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <UserCardList />
    </div>
  );
};
