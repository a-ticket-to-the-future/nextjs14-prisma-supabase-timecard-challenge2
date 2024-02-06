import {create} from 'zustand'
import { ModalType } from '../types'


//サインアップの状態管理
const useProfileModal = create<ModalType>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false}),
}))


export default useProfileModal