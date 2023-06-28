import Timeline from "../components/Timeline/Timeline";
import Layout from "../components/Layout";
import Header from "../components/Global/Header";
import Image from "next/image";
import ButtonLink from "../components/Links/ButtonLink";

import MyImage from "../../public/me.jpg";

export default function CV() {
    return (
        <Layout title='Curriculum Vitae'>
            <Header title="Curriculum Vitae" />
            <article className='container mx-auto py-5 flex flex-col lg:flex-row'>
                <div className='-mt-20 p-5 w-1/5'>
                    <Image
                        className="border-solid border-4 border-slate-900 mb-5 bg-white"
                        src={MyImage}
                        alt={"James Amner"}
                        width={500}
                        height={500}
                        placeholder="blur"
                        priority
                    />
                    <span className='hidden md:block'>
                        <ButtonLink href='/'>« Home</ButtonLink>
                    </span>
                </div>
                <div className='w-full'>
                    <Timeline />
                </div>
            </article>
        </Layout>
    )
}
