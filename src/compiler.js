export const compilerVersion='1.0.0';
export function compilePrompt(workflow, context='', options={}) {
  if(!workflow) throw new Error('Workflow is required');
  const focus=(options.focus?.length?options.focus:workflow.focus).map(x=>`- ${x}`).join('\n');
  const extra=(options.instructions||'').trim();
  const source=context.trim() || '[No source context supplied. Ask for missing context rather than inventing facts.]';
  return `ROLE / OPERATING CONTEXT\nYou are supporting a product designer. Be precise, practical, and explicit about uncertainty.\n\nTASK\n${workflow.task}\n\nOBJECTIVE\n${workflow.objective}\n\nSOURCE CONTEXT\n<source>\n${source}\n</source>\n\nFOCUS\n${focus}\n${extra?`\nADDITIONAL CONSTRAINTS\n${extra}\n`:''}\nEXPECTED OUTPUT\n${workflow.output}. Prioritize findings by user impact and actionability.\n\nVALIDATION REQUIREMENTS\n- Do not invent facts or requirements not supported by the source.\n- Label assumptions explicitly.\n- Separate observed issues, questions, and recommendations.\n- Make missing context visible instead of silently filling gaps.\n- Keep recommendations specific enough for a product designer to act on.`;
}
