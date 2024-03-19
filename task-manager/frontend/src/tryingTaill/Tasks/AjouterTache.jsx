import React, { useState } from "react";

export default function AjouterTache() {
    const [crudModal, setCrudModal] = useState(false);
    const tooglecrudModal = () => {
        setCrudModal(!crudModal);
    };
    return (
        <div>
            <button
                data-modal-target="crud-modal"
                data-modal-toggle="crud-modal"
                className="text-white bg-btn  hover:opacity-80  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 w-32 "
                type="button"
                onClick={tooglecrudModal}
            >
                Ajouter tache
            </button>
            {crudModal && (
                <div>
                    <div
                        id="crud-modal"
                        tabIndex="-1"
                        aria-hidden="true"
                        className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                    >
                        <div className="relative p-4 w-full max-w-2xl mx-auto mt-20 lg:mr-36  max-h-full  ">
                            <div className="relative bg-white rounded-lg shadow-md border border-gray-300 dark:bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Create New Task
                                    </h3>
                                    <button
                                        type="button"
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-toggle="crud-modal"
                                        onClick={tooglecrudModal}
                                    >
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            />
                                        </svg>
                                        <span className="sr-only">
                                            Close modal
                                        </span>
                                    </button>
                                </div>
                                <form className="p-4 md:p-5">
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Title of your task"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label
                                                htmlFor="category"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Statut
                                            </label>
                                            <select
                                                id="category"
                                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            >
                                                <option
                                                    selected=""
                                                    value="Pas encore"
                                                >
                                                    Pas encore
                                                </option>
                                                <option value="En cours">
                                                    En cours
                                                </option>
                                                <option value="Terminée">
                                                    Terminée
                                                </option>
                                            </select>
                                        </div>
                                        <div className="col-span-2">
                                            <label
                                                htmlFor="description"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Description
                                            </label>
                                            <textarea
                                                id="description"
                                                rows="4"
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Write task description here"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="
                                        text-white bg-btn  hover:opacity-80  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 
                                        text-white inline-flex items-center hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-50"
                                    >
                                        <svg
                                            className="me-1 -ms-1 w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Add new Task
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
