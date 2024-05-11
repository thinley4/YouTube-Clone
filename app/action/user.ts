"use server"

import { getCategoryVideos } from '@/redux/features/categorySlice'
import { useDispatch, useSelector } from 'react-redux'

//@ts-ignore
export const { categoryVideos } = useSelector((state) => state.category);

export async function getLanding() {
    const dispatch = useDispatch();
    //@ts-ignore
    await dispatch(getCategoryVideos(`search?part=snippet&q=${"Travel"}`))
    document.title = `${"Home - Youtube"}`
}