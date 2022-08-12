import {batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn} from "react-scroll-motion";


export const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
export const FadeUp = batch(Fade(), Move(), Sticky(50,50));
export const MoveInLeft = function (x){return  batch(MoveIn(x*1000,0), MoveOut(0, -1000))};