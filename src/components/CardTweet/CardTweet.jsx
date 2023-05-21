import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";

import {
  addFollowersId,
  removeFollowersId,
} from "../../redux/followersIdSlice";
import { useUpdateUserMutation } from "../../redux/usersApi";
import { selectFollowers } from "../../redux/selectors";

import { messageError } from "../../utils/messageError";
import { subscribedUser, unSubscribeUser } from "../../utils/changesQuantity";

import {
  Avatar,
  BoxImage,
  BtnFollow,
  BtnFollowing,
  CardBox,
  CardInfo,
  Line,
  Text,
  TextBoard,
} from "./CardTweet.styled";

export const CardTweet = ({ user }) => {
  const [isFollow, setIsFollow] = useState(false);
  const savedFollowers = useSelector(selectFollowers);

  const { tweets, followers, id, avatar, name } = user;

  const dispatch = useDispatch();
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    savedFollowers.includes(id) ? setIsFollow(true) : setIsFollow(false);
  }, [id, savedFollowers]);

  const handleSubscribed = async (id) => {
    const body = subscribedUser(user);
    try {
      await updateUser({ body, id });
      dispatch(addFollowersId(id));
      setIsFollow(true);
    } catch (error) {
      messageError(error.message);
    }
  };

  const handleUnSubscribe = async (id) => {
    const body = unSubscribeUser(user);
    try {
      await updateUser({ body, id });
      dispatch(removeFollowersId(id));
      setIsFollow(false);
    } catch (error) {
      messageError(error.message);
    }
  };

  return (
    <>
      <CardBox>

        <Line />

        <BoxImage>
          <Avatar src={avatar} alt={name} width="70" />
        </BoxImage>

        <CardInfo>

          <TextBoard>

            <Text>
              {String(tweets).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {" "}
              Tweets
            </Text>

            <Text>
              {String(followers).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              Followers
            </Text>

          </TextBoard>

          {!isFollow ? (
            <BtnFollow
              type="button"
              disabled={isLoading}
              onClick={() => handleSubscribed(id)}
            >
              Follow
            </BtnFollow>
          ) : (
            <BtnFollowing
              type="button"
              onClick={() => handleUnSubscribe(id)}
              disabled={isLoading}
            >
              Following
            </BtnFollowing>
          )}

        </CardInfo>

      </CardBox>
    </>
  );
};

CardTweet.propTypes = {
  user: PropTypes.shape({
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.any,
  }),
};
