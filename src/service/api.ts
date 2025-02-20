import { Skill } from "../pages/Resume";

const BASE_URL = "http://localhost:1337/api";

interface SkillResponse {
  data: Skill[];
}

export async function getEducations() {
  try {
    const response = await fetch(`${BASE_URL}/educations`)
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const { data } = await response.json()
    return {
      ...data
    }
  } catch (error) {
    console.error('Error: ', error)
  }
}

export async function getLanguages() {
  try {
    const response = await fetch(`${BASE_URL}/languages`)
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const { data } = await response.json()
    return {
      ...data
    }
  } catch (error) {
    console.error('Error: ', error)
  }
}

export async function getSkills(): Promise<SkillResponse> {
  try {
    const response = await fetch(`${BASE_URL}/skills`)
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const skills = await response.json() as SkillResponse
    return skills
  } catch (error) {
    console.error('Error: ', error)
    throw error
  }
}

export async function getWorkExperiences() {
  try {
    const response = await fetch(`${BASE_URL}/work-experiences`)
    if (!response.ok) {
      throw new Error('something went wrong');
    }
    const { data } = await response.json()
    return {
      ...data
    }
  } catch (error) {
    console.error('Error: ', error)
  }
} 