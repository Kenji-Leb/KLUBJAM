import { PrismaService } from 'src/prisma.service';

import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { Projects } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async getPersonalProjectsByUserId(creator_id: number): Promise<any> {
    return this.prisma.projects.findMany({
      where: {
        creator_id: creator_id,
        type: 'Personal',
      },
    });
  }

  async getGroupProjectsByUserId(creator_id: number): Promise<any> {
    return this.prisma.projects.findMany({
      where: {
        creator_id: creator_id,
        type: 'Group',
      },
    });
  }

  async createProject(data: CreateProjectDto, creatorId: number) {
    const projectData = {
      project_name: data.project_name,
      type: data.type,
      description: data.description,
      privacy: data.privacy,
      creator: { connect: { id: creatorId } },
    };

    const collaborators =
      data.type === 'Group'
        ? data.collaborators?.map((id) => ({
            slice_name: '',
            slice_audio: '',
            duration: '',
            collaborators: { connect: { id: id } },
          }))
        : []; // Empty array for Personal projects

    const project = await this.prisma.projects.create({
      data: {
        ...projectData,
        collaborators: {
          create: collaborators,
        },
      },
    });

    return project;
  }
}
