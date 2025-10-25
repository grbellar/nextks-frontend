import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import type { PathNode } from '../data/mockData';

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource: PathNode | null;
}

export const ResourceModal = ({ isOpen, onClose, resource }: ResourceModalProps) => {
  if (!resource) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-10" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all relative">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="p-6">
                  {/* Header */}
                  <Dialog.Title className="text-xl font-bold text-text-dark mb-1 pr-6">
                    {resource.label}
                  </Dialog.Title>
                  {resource.provider && (
                    <p className="text-sm text-text-medium mb-3">{resource.provider}</p>
                  )}

                  {/* Type and Status Badges */}
                  <div className="flex gap-2 mb-4">
                    {resource.resourceType && (
                      <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                        {resource.resourceType}
                      </span>
                    )}
                    {resource.status === 'completed' && (
                      <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-success-green text-white">
                        Completed
                      </span>
                    )}
                    {resource.status === 'current' && (
                      <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-success-green text-white">
                        Beginner
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  {resource.description && (
                    <p className="text-sm text-text-dark mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                  )}

                  {/* Duration and Cost */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {resource.duration && (
                      <div>
                        <div className="flex items-center gap-1.5 text-text-medium mb-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs">Duration</span>
                        </div>
                        <span className="text-sm font-semibold text-text-dark">{resource.duration}</span>
                      </div>
                    )}
                    {resource.cost && (
                      <div>
                        <div className="flex items-center gap-1.5 text-text-medium mb-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs">Cost</span>
                        </div>
                        <span className="text-sm font-semibold text-text-dark">{resource.cost}</span>
                      </div>
                    )}
                  </div>

                  {/* Skills */}
                  {resource.skills && resource.skills.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-1.5 mb-2">
                        <svg className="w-4 h-4 text-text-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h4 className="text-xs font-semibold text-text-medium">
                          Skills You'll Learn
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {resource.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs bg-gray-100 text-text-dark rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  {resource.link && (
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-primary-navy text-white px-4 py-3 rounded-xl text-center text-sm font-semibold hover:bg-opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      Visit Website
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
