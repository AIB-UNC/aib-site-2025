interface LeadershipMember {
  name: string
  position_title?: string | null
  pillar?: string | null
  sport?: string | null
  major?: string | null
  grad_year?: string | null
  bio?: string | null
}

/**
 * Generates a consistent, professional bio for leadership members
 * when their bio field is empty or missing.
 *
 * @param member - Leadership member data from Supabase
 * @returns A formatted bio string (280-320 characters)
 */
export function generateBio(member: LeadershipMember): string {
  // If bio exists and is substantial, use it
  if (member.bio && member.bio.trim().length > 40) {
    return member.bio.trim()
  }

  const parts: string[] = []

  // First sentence: role and pillar
  const position = member.position_title || "Leader"
  const pillar = member.pillar || "Leadership"
  parts.push(`${member.name} serves as ${position} on the ${pillar} pillar.`)

  // Second sentence: background and focus
  const background: string[] = []

  if (member.grad_year && member.major) {
    background.push(`A ${member.grad_year} ${member.major} major`)
  } else if (member.grad_year) {
    background.push(`A ${member.grad_year} student`)
  } else if (member.major) {
    background.push(`A ${member.major} major`)
  }

  if (member.sport) {
    background.push(`${member.sport} student-athlete`)
  }

  if (background.length > 0) {
    parts.push(`${background.join(" and ")}, they focus on professional growth and community impact for AIB.`)
  } else {
    parts.push("They focus on professional growth and community impact for AIB.")
  }

  const bio = parts.join(" ")

  // Truncate if too long (max 320 characters)
  return bio.length > 320 ? bio.slice(0, 317) + "…" : bio
}
