// @flow
import * as React from "react";
import {Image} from "react-native";

import Images from "./images";
import type {BaseProps} from "./Types";

type AvatarProps = BaseProps & {
    size: number,
    height: number,
    id: number,
    width: number,
};

export default class Avatar extends React.PureComponent<AvatarProps> {

    static defaultProps = {
        size: 60,
        height: 20,
        id: 0,
        width: 110
    }

    render(): React.Node {
        const {size, height, id, style, width} = this.props;
        let source;
        if (id === 1) {
            source = Images.avatar1;
        } else if (id === 2) {
            source = Images.avatar2;
        } else if (id === 3) {
            source = Images.avatar3;
        } else {
            source = Images.defaultAvatar;
        }
        return <Image {...{source}} style={[style, {width: width, height: height }]} />;
    }
}
