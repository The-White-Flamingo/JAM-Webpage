import {TITLE, BIO, SIGNATURE} from '../constant';

const Bio = () => {
    return (
        <div className='h-3/4 bg-zinc-900 w-full flex items-center justify-center py-8 md:py-10 ld:py-12 xl:py-16 px-8 md:px-14'>
            <div className='container flex items-center object-center mx-auto my-2 xl:my-12'>
                <div className='mx-auto p-6 xl:p-14'>
                    <div className='text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>{TITLE.heading}</div>
                    <div className='py-10 pl-10 max-w-md mb-4 text-md lg:text-xl font-bold text-slate-200' style={{lineHeight:'1.75'}}>{BIO}</div>
                    <div className='text-slate-200'><span>{SIGNATURE.name}</span></div>
                </div>
            </div>
        </div>
    );
};

export default Bio;