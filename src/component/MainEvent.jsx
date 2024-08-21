import {TITLE} from "../constant/index.jsx";
import {CiLocationOn} from "react-icons/ci";

const MainEvent = () => {
    return (
        <section className='min-h-screen bg-gradient-to-t from-zinc-900 via-zinc-900 to-violet-950 w-full flex items-center justify-center py-8 md:py-10 ld:py-12 xl:py-16 px-8 md:px-14'>
            <div className='w-full my-8'>
                <div className='container flex justify-center items-center mx-auto my-2 xl:my-12'>
                        <div className='container mx-auto flex flex-col justify-center items-center pb-2 lg:pb-6'>
                            <div className='flex flex-col items-center justify-center pb-4'>
                                <div className='container mx-auto text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                                    {TITLE.gig}
                                </div>
                            </div>
                            <div className='p-2 text-slate-200 text-xs md:text-sm lg:text-md xl:text-lg'>Follow to our amazing shows in this 2022 all around the world</div>
                        </div>
                </div>

                <div className='w-full md:w-[70] lg:w-[75%] xl:w-[80%] container mx-auto p-4 md:p-8 lg:p-12 xl:p-14 grid grid-cols-1 grid-rows-5 gap-y-10 my-8 text-slate-200'>

                    <div className='flex items-center justify-between container my-4 mx-auto border-b border-slate-500 pb-1'>
                        <div className='flex flex-row items-center justify-between'>
                            <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>27</h1>
                            <div className='flex flex-col items-start ml-2 text-sm text-zinc-400'>
                                <p>August</p>
                                <p>21:00</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center'><CiLocationOn size={20}
                                                                                  className='hidden md:block'/>
                            <p className='ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>KN
                                Circle, ROSA (Ghana)</p>
                        </div>
                        <div className='flex flex-row items-center text-md text-zinc-400'>
                            <p className='mr-2 border-2 border-violet-700 rounded-md p-2 text-slate-200 cursor-pointer'> Reserve </p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between container my-4 mx-auto border-b border-slate-500'>
                        <div className='flex flex-row items-center justify-between'>
                            <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>25</h1>
                            <div className='flex flex-col items-start ml-2 text-sm text-zinc-400'>
                                <p>March</p>
                                <p>18:00</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center'><CiLocationOn size={20}
                                                                                  className='hidden md:block'/><p
                            className='ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>KN
                            Circle, ROSA (Ghana)</p></div>
                        <div className='flex flex-row items-center text-md text-zinc-400'>
                            <p className='mr-2 border-2 border-violet-700 rounded-md p-2 text-red-700 line-through'> Passed</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between container my-4 mx-auto border-b border-slate-500'>
                        <div className='flex flex-row items-center justify-between'>
                            <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>23</h1>
                            <div className='flex flex-col items-start ml-2 text-sm text-zinc-400'><p>April</p>
                                <p>10:00</p></div>
                        </div>
                        <div className='flex flex-row items-center'><CiLocationOn size={20}
                                                                                  className='hidden md:block'/><p
                            className='ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>KN
                            Circle, ROSA (Ghana)</p></div>
                        <div className='flex flex-row items-center text-md  text-zinc-400'>
                            <p className='mr-2 border-2 border-violet-700 rounded-md p-2 text-red-700 line-through'> Passed</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between container my-4 mx-auto border-b border-slate-500'>
                        <div className='flex flex-row items-center justify-between'>
                            <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>21</h1>
                            <div className='flex flex-col items-start ml-2 text-sm text-zinc-400'>
                                <p>June</p>
                                <p>20:00</p></div>
                        </div>
                        <div className='flex flex-row items-center'><CiLocationOn size={20}
                                                                                  className='hidden md:block'/>
                            <p className='ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>KN
                                Circle, ROSA (Ghana)</p>
                        </div>
                        <div className='flex flex-row items-center text-md  text-zinc-400'>
                            <p className='mr-2 border-2 border-violet-700 rounded-md p-2 text-red-700 line-through'> Passed</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between container my-4 mx-auto border-b border-slate-500'>
                        <div className='flex flex-row items-center justify-between'>
                            <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>19</h1>
                            <div className='flex flex-col items-start ml-2 text-sm text-zinc-400'>
                                <p>July</p>
                                <p>11:00</p></div>
                        </div>
                        <div className='flex flex-row items-center'><CiLocationOn size={20}
                                                                                  className='hidden md:block'/><p
                            className='ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>KN
                            Circle, ROSA (Ghana)</p></div>
                        <div className='flex flex-row items-center text-md  text-zinc-400'>
                            <p className='mr-2 border-2 border-violet-700 rounded-md p-2 text-red-700 line-through'> Passed</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between container my-4 mx-auto border-b border-slate-500'>
                        <div className='flex flex-row items-center justify-between'>
                            <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>28</h1>
                            <div className='flex flex-col items-start ml-2 text-sm text-zinc-400'>
                                <p>February</p>
                                <p>13:00</p></div>
                        </div>
                        <div className='flex flex-row items-center'><CiLocationOn size={20}
                                                                                  className='hidden md:block'/><p
                            className='ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>KN
                            Circle, ROSA (Ghana)</p></div>
                        <div className='flex flex-row items-center text-md  text-zinc-400'>
                            <p className='mr-2 border-2 border-violet-700 rounded-md p-2 text-red-700 line-through'> Passed</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between container my-4 mx-auto border-b border-slate-500'>
                        <div className='flex flex-row items-center justify-between'>
                            <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>13</h1>
                            <div className='flex flex-col items-start ml-2 text-sm text-zinc-400'>
                                <p>May</p>
                                <p>16:00</p></div>
                        </div>
                        <div className='flex flex-row items-center'><CiLocationOn size={20}
                                                                                  className='hidden md:block'/><p
                            className='ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>KN
                            Circle, ROSA (Ghana)</p></div>
                        <div className='flex flex-row items-center text-md  text-zinc-400'>
                            <p className='mr-2 border-2 border-violet-700 rounded-md p-2 text-red-700 line-through'> Passed</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between container my-4 mx-auto border-b border-slate-500'>
                        <div className='flex flex-row items-center justify-between'>
                            <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>23</h1>
                            <div className='flex flex-col items-start ml-2 text-sm text-zinc-400'>
                                <p>January</p>
                                <p>19:00</p></div>
                        </div>
                        <div className='flex flex-row items-center'><CiLocationOn size={20}
                                                                                  className='hidden md:block'/><p
                            className='ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>KN
                            Circle, ROSA (Ghana)</p></div>
                        <div className='flex flex-row items-center text-md  text-zinc-400'>
                            <p className='mr-2 border-2 border-violet-700 rounded-md p-2 text-red-700 line-through'>Passed</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
export default MainEvent
