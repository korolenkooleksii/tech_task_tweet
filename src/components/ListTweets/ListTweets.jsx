import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useGetUsersByPageQuery } from "../../redux/usersApi";
import { selectFollowers } from "../../redux/selectors";
import { LIMIT, TOTAL } from "../../constants/constToLoadPage";

import { NavLink } from "react-router-dom";
import { CardTweet } from "../CardTweet/CardTweet";
import { TbArrowNarrowLeft } from "react-icons/tb";
import {
  Board,
  Button,
  Filter,
  FilterBoard,
  Info,
  Item,
  ListBox,
  LoadMore,
  TweetsBox,
} from "./ListTweets.styled";

const ListTweets = () => {
  const [limit, setLimit] = useState(LIMIT);

  const {
    data: users = [],
    isLoading,
    isFetching,
    isError,
  } = useGetUsersByPageQuery(limit);

  const [filteredUsers, setFilteredUsers] = useState([]);

  const followers = useSelector(selectFollowers);

  useEffect(() => {
    !isLoading && setFilteredUsers(users);
  }, [isLoading, users]);

  const filterUsers = (status) => {
    let usersFiltered = [];

    if (status === "all") {
      setFilteredUsers(users);
      return;
    }

    if (status === true) {
      users.forEach((user) => {
        followers.includes(user.id) && usersFiltered.push(user);
      });
    }

    if (status === false) {
      users.forEach((user) => {
        !followers.includes(user.id) && usersFiltered.push(user);
      });
    }
    setFilteredUsers(usersFiltered);
  };

  const loadMore = () => {
    setLimit((prev) => prev + LIMIT);
  };

  return (
    <>
      {isError && (
        <Board
          style={{
            margin: "0 auto",
            minWidth: "500px",
          }}
        >
          <Info>Oops... Try refreshing the data after a while.</Info>
        </Board>
      )}

      {!isLoading && !isError && (
        <TweetsBox>
          <FilterBoard>
            <NavLink to="/">
              <Button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <TbArrowNarrowLeft />
                Go back
              </Button>
            </NavLink>

            <Filter>
              <Item>
                <Button type="button" onClick={() => filterUsers("all")}>
                  All
                </Button>
              </Item>

              <Item>
                <Button type="button" onClick={() => filterUsers(false)}>
                  Follow
                </Button>
              </Item>

              <Item>
                <Button type="button" onClick={() => filterUsers(true)}>
                  Followings
                </Button>
              </Item>
            </Filter>
          </FilterBoard>

          <ListBox>
            {filteredUsers.map((user) => (
              <CardTweet key={user.id} user={user} />
            ))}
          </ListBox>

          {users.length >= TOTAL ? (
            <Board>
              <Info>You have downloaded all the tweets.</Info>
            </Board>
          ) : (
            <LoadMore>
              <Button
                type="button"
                onClick={() => loadMore()}
                isLoading={isFetching}
              >
                Load more...
              </Button>
            </LoadMore>
          )}
        </TweetsBox>
      )}
    </>
  );
};

export default ListTweets;
