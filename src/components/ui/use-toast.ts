
// export const useToast = () => {
  
// };

// export const toast = {
 
// };
export const useToast = () => {
      return {
        toast: ({ title, description }: { title: string; description: string }) => {
          console.log(`Toast: ${title} - ${description}`);
        },
      };
    };