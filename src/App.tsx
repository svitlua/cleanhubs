import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./App.styles";
import { Hub } from "./components";

const HUBS_URL = "https://marketplace-demo.cleanhub.com/api/public/hubs";

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [hubs, setHubs] = useState([]);

  const fetchHubs = async () => {
    try {
      setLoading(true);
      await axios.get(HUBS_URL).then((res) => {
        const { data } = res;
        setHubs(data);
      });
    } catch (error) {
      console.log(error);
      alert(`There was a problem while loading collection hub data:\n${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHubs();
  }, []);

  return (
    <S.Container>
      {loading ? (
        <S.Loader />
      ) : (
        <>
          <S.Header>Collection Hubs</S.Header>
          <S.HubsWrapper>
            {hubs.map((hub, index) => (
              <Hub data={hub} key={index} />
            ))}
          </S.HubsWrapper>
        </>
      )}
    </S.Container>
  );
};

export default App;
