import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { useForm } from 'react-hook-form'
import { IoCloseOutline } from 'react-icons/io5'
import emailjs from '@emailjs/browser'

import { Button } from './Button.jsx'
import FormRow from './FormRow.jsx'
import Form from './Form.jsx'
import Icon from './Icon.jsx'
import toast from 'react-hot-toast'
import { useRef } from 'react'

function FormTrigger({ children }) {
    const { register, handleSubmit, reset, getValues, formState } = useForm()
    const close = useRef(null)

    const { errors } = formState
    function onSubmit(data) {
        emailjs
            .send(
                'Administritis',
                'template_ygv160b',
                // @ts-ignore,
                data,
                'nlj4GkkuZgq55WDCW'
            )
            .then(
                (result) => {
                    close.current.click()
                    toast.success('Message Send Successfully!')
                },
                (error) => {
                    toast.error('Message Not Send!')
                }
            )
    }
    function onError(errors) {
        toast.error(
            'Eroare la completarea formularului.Verifica campurile introduse.'
        )
    }

    return (
        <Drawer>
            <DrawerTrigger>{children}</DrawerTrigger>
            <DrawerContent className="mx-auto  flex flex-col items-center  justify-items-center bg-white px-10 py-5 2xl:px-32 ">
                <DrawerClose ref={close} className="absolute  right-6 top-6">
                    <Icon hovercolor="#7c2d24" color={'#626262'} sizes="medium">
                        <IoCloseOutline></IoCloseOutline>
                    </Icon>
                </DrawerClose>

                <DrawerHeader>
                    <DrawerTitle className="mb-5 text-center text-[24px] leading-none sm:text-[32px] md:text-[4.4rem] xl:mb-2 xl:leading-normal">
                        Afla mai multe despre oferta noastra
                    </DrawerTitle>
                    <DrawerDescription className="text-center text-[14px] text-greyDark  sm:text-[16px] md:text-[18px] ">
                        Fie ca doresti sa vorbim despre serviciile oferite sau
                        pentru alte sugestii, dorim sa-ti auzim opinia.
                    </DrawerDescription>
                </DrawerHeader>

                <Form onSubmit={handleSubmit(onSubmit, onError)}>
                    {/* <DrawerFooter> */}
                    <FormRow
                        label="Nume si prenume"
                        error={errors?.name?.message}
                    >
                        <input
                            className="border-accent2 border-2 border-solid border-greyLight bg-primaryLight px-4 py-2 text-[16px]  text-primaryDark  accent-colorAccent2  focus:outline-none focus:ring focus:ring-colorAccent2 focus:ring-offset-1"
                            type="text"
                            id="name"
                            placeholder="ex: Popescu Gabriel"
                            {...register('name', {
                                required: 'This field is required',
                            })}
                        />
                    </FormRow>
                    <FormRow label="Email" error={errors?.email?.message}>
                        <input
                            className="border-accent2 border-2 border-solid border-greyLight bg-primaryLight px-4 py-2 text-[16px]  accent-colorAccent2 focus:outline-none focus:ring focus:ring-colorAccent2  focus:ring-offset-2"
                            placeholder="ex: youremail@yahoo.com"
                            type="email"
                            id="email"
                            {...register('email', {
                                required: 'This field is required',
                            })}
                        />
                    </FormRow>
                    <FormRow label="Telefon" error={errors?.phone?.message}>
                        <input
                            className="border-accent2 border-2 border-solid border-greyLight bg-primaryLight px-4 py-2 text-[16px] accent-colorAccent2 focus:outline-none focus:ring focus:ring-colorAccent2 focus:ring-offset-2"
                            placeholder="ex: 0760...."
                            type="tel"
                            id="phone"
                            {...register('phone', {})}
                        />
                    </FormRow>

                    <FormRow label="Subiect" error={errors?.subiect?.message}>
                        <input
                            className="border-accent2 border-2 border-solid border-greyLight bg-primaryLight px-4 py-2 text-[18px] accent-colorAccent2 focus:outline-none focus:ring focus:ring-colorAccent2 focus:ring-offset-2 "
                            placeholder="ex: Administrare completa"
                            type="text"
                            id="subiect"
                            {...register('subiect', {
                                required: 'This field is required',
                            })}
                        />
                    </FormRow>

                    <FormRow label="Mesaj" error={errors?.mesaj?.message}>
                        <textarea
                            className="border-accent2 border-2 border-solid border-greyLight  bg-primaryLight px-4 py-2 text-[16px] accent-colorAccent2 focus:outline-none focus:ring focus:ring-colorAccent2 focus:ring-offset-2"
                            id="mesaj"
                            placeholder="Mesajul tau"
                            {...register('mesaj', {
                                required: 'This field is required',
                            })}
                        />
                    </FormRow>
                    <div className="flex justify-between gap-6">
                        <Button
                            type="reset"
                            $variation="secondary"
                            $size="medium"
                        >
                            Cancel
                        </Button>
                        <Button
                            // onClick={(e) => e.preventDefault()}
                            $variation="primary"
                            $size="medium"
                        >
                            Submit
                        </Button>
                    </div>
                    {/* </DrawerFooter> */}
                </Form>
            </DrawerContent>
        </Drawer>
    )
}

export default FormTrigger
