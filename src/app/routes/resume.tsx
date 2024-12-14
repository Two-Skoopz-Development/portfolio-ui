import React from 'react';

import { ContentLayout } from '@components/layouts';
import { Experience, Education, Projects } from '@features/resume/components';

const selectedFormat =
  'inline-block p-4 text-platinum rounded-t-lg active dark:text-blue-500 bg-space-cadet-blue active';
const nonSelectedFormat =
  'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300';

export const Resume: React.FC = () => {
  const pages: { [key: string]: React.FC } = {
    Experience: Experience,
    'Education/Skills': Education,
    Projects: Projects,
  };

  const [selected, setSelected] = React.useState<string>('Experience');
  const TempComponent: React.FC = pages[selected];

  return (
    <ContentLayout>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {Object.keys(pages).map((key) => {
          const isSelected = key == selected ? true : false;
          return (
            <li key={key}>
              <a
                aria-current="page"
                className={isSelected ? selectedFormat : nonSelectedFormat}
                onClick={() => {
                  if (!isSelected) {
                    setSelected(key);
                  }
                }}
              >
                {key}
              </a>
            </li>
          );
        })}
      </ul>
      <TempComponent />
    </ContentLayout>
  );
};
