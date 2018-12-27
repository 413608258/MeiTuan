

import DetailCell from'./DetailCell';
import NavigationItem from'./NavigationItem';
import Separator from'./Separator';
import SpacingView from'./SpacingView';
import TabBarItem from'./TabBarItem';
import WebScene from'./WebScene'

import ButtonInner from './Button';
//使用这种方式 export 可以,或者使用下面方式
//export let Button = ButtonInner;

export {
    ButtonInner as Button,
    DetailCell,
    NavigationItem,
    Separator,
    SpacingView,
    TabBarItem,
    WebScene,
}

/*
import ButtonInner from './Button'
export let Button = ButtonInner

import DetailCell from './DetailCell'
import NavigationItem from './NavigationItem'
import Separator from './Separator'
import SpacingView from './SpacingView'
import TabBarItem from './TabBarItem'
import WebScene from './WebScene'

export {
    DetailCell,
    NavigationItem,
    Separator,
    SpacingView,
    TabBarItem,
    WebScene
}*/
