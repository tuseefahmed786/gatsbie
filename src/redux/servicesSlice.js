import { createSlice } from "@reduxjs/toolkit";
import avatar from "../assets/profileAvatar.png";
import verifiedIcon from "../assets/verifyIcon.png";
const initialState = {
  services : [
      {
          id: 1,
          serviceCategory: "Job search",
          name: "Wang Fang",
          role: "Chief Executive Officer",
          type: "Expert Consultation",
          description: {
              title: "I can provide guidance on UX Designer roles in the USA.",
              details: "I offer insights into the hiring process for UX designers at top tech firms.",
          },
          availability: [
              { day: "Monday", time: "From 10:00 to 22:00" },
              { day: "Wednesday", time: "From 14:00 to 20:00" },
          ],
          price: 150,
          avatar: avatar,
          verifiedIcon: verifiedIcon,
      },
      {
          id: 2,
          serviceCategory: "Career Coaching",
          name: "Sarah Lee",
          role: "Senior Product Manager",
          type: "Career Advice",
          description: {
              title: "I can help you transition into product management roles.",
              details: "Expert career coaching to help you land a PM role in tech.",
          },
          availability: [
              { day: "Tuesday", time: "From 09:00 to 18:00" },
              { day: "Thursday", time: "From 11:00 to 17:00" },
          ],
          price: 200,
          avatar: avatar,
          verifiedIcon: verifiedIcon,
      },
      {
          id: 3,
          serviceCategory: "Interview Prep",
          name: "James Smith",
          role: "Lead Software Engineer",
          type: "Mock Interviews",
          description: {
              title: "I conduct mock interviews for software engineers.",
              details: "Get real-world coding interview experience and feedback.",
          },
          availability: [
              { day: "Monday", time: "From 12:00 to 16:00" },
              { day: "Friday", time: "From 14:00 to 21:00" },
          ],
          price: 180,
          avatar: avatar,
          verifiedIcon: verifiedIcon,
      },
      {
          id: 4,
          serviceCategory: "Resume Review",
          name: "Emily Johnson",
          role: "HR Manager",
          type: "Resume Critique",
          description: {
              title: "I will review and optimize your resume for tech roles.",
              details: "Get feedback on formatting, keywords, and ATS optimization.",
          },
          availability: [
              { day: "Wednesday", time: "From 10:00 to 19:00" },
              { day: "Saturday", time: "From 13:00 to 20:00" },
          ],
          price: 120,
          avatar: avatar,
          verifiedIcon: verifiedIcon,
      },
      {
          id: 5,
          serviceCategory: "LinkedIn Optimization",
          name: "Michael Brown",
          role: "Recruitment Specialist",
          type: "LinkedIn Profile Review",
          description: {
              title: "I can optimize your LinkedIn profile for better job opportunities.",
              details: "Stand out to recruiters with a powerful LinkedIn profile.",
          },
          availability: [
              { day: "Tuesday", time: "From 08:00 to 15:00" },
              { day: "Thursday", time: "From 12:00 to 18:00" },
          ],
          price: 140,
          avatar: avatar,
          verifiedIcon: verifiedIcon,
      },
      {
          id: 6,
          serviceCategory: "Tech Career Guidance",
          name: "Sophia Martinez",
          role: "Tech Recruiter",
          type: "Career Strategy Session",
          description: {
              title: "I help tech professionals plan and grow their careers.",
              details: "Expert advice on tech industry trends and job strategies.",
          },
          availability: [
              { day: "Monday", time: "From 09:00 to 13:00" },
              { day: "Friday", time: "From 15:00 to 22:00" },
          ],
          price: 160,
          avatar: avatar,
          verifiedIcon: verifiedIcon,
      },
      {
          id: 7,
          serviceCategory: "Freelancing Tips",
          name: "Daniel Clark",
          role: "Freelance Consultant",
          type: "Freelancing 101",
          description: {
              title: "Learn how to start and scale your freelancing business.",
              details: "Get tips on client acquisition, pricing, and contracts.",
          },
          availability: [
              { day: "Wednesday", time: "From 11:00 to 19:00" },
              { day: "Sunday", time: "From 10:00 to 17:00" },
          ],
          price: 130,
          avatar: avatar,
          verifiedIcon: verifiedIcon,
      },
      {
          id: 8,
          serviceCategory: "Startup Advice",
          name: "Olivia Wilson",
          role: "Startup Founder",
          type: "Startup Coaching",
          description: {
              title: "I provide startup coaching and business growth strategies.",
              details: "Get mentorship on fundraising, scaling, and hiring.",
          },
          availability: [
              { day: "Thursday", time: "From 10:00 to 18:00" },
              { day: "Saturday", time: "From 12:00 to 20:00" },
          ],
          price: 250,
          avatar: avatar,
          verifiedIcon: verifiedIcon,
      },
  ],
    selectedService: null,
};

const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: { 
        selectService: (state, action) => {
            state.selectedService = state.services.find(
                (service) => service.id === action.payload
            );
        },
        clearSelectedService: (state) => {
            state.selectedService = null;
        },
    },
});

export const { selectService, clearSelectedService } = servicesSlice.actions;

export default servicesSlice.reducer;
